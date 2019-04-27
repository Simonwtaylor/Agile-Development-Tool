using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace task_api.Models.Seeding
{
    public class Seeding
    {
        private readonly IMongoCollection<User> _users;
        private readonly IMongoCollection<TaskItem> _tasks;
        public Seeding(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("TaskDb"));
            var database = client.GetDatabase("Tasks");

            _users = database.GetCollection<User>("Users");
            _tasks = database.GetCollection<TaskItem>("Tasks");

        }

        public async Task SeedDB()
        {
            var users = await _users.FindAsync(user => true);
            if (users.ToList().Count == 0)
            {
                var newUsers = new List<User>()
                {
                    new User() { Id = null, Email = "Example1.User1@email.com", Firstname = "Example1", Lastname = "User1", Role = "Developer" },
                    new User() { Id = null, Email = "Example2.User2@email.com", Firstname = "Example2", Lastname = "User2", Role = "Developer" }
                };

                await _users.InsertManyAsync(newUsers);
            }

            var tasks = await _tasks.FindAsync(task => true);
            if(tasks.ToList().Count == 0)
            {
                var newTasks = new List<TaskItem>()
                {
                    new TaskItem() { Id = null, AssignedColumn = 1, AssignedUser = _users.Find(user => true).FirstOrDefault(), StoryPoints = 5, Title = "New Task 1" },
                    new TaskItem() { Id = null, AssignedColumn = 1, AssignedUser = _users.Find(user => true).FirstOrDefault(), StoryPoints = 10, Title = "New Task 2" }
                };

                await _tasks.InsertManyAsync(newTasks);
            }

            return;
        }
    }
}
