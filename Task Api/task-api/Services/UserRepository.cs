using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using task_api.Models;

namespace task_api.Services
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _users;

        public UserRepository(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("TaskDb"));
            var database = client.GetDatabase("Tasks");
            _users = database.GetCollection<User>("Users");
        }

        public async Task<User> CreateUser(User user)
        {
            await _users.InsertOneAsync(user);
            return user;
        }

        public async Task DeleteUser(string id)
        {
            await _users.DeleteOneAsync(u => u.Id == id);
            return;
        }

        public async Task<User> GetUser(string id)
        {
            return await _users.Find(u => u.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<User>> GetUsers()
        {
            return await _users.Find(user => true).ToListAsync();
        }

        public async Task<User> UpdateUser(string id, User user)
        {
            await _users.ReplaceOneAsync(u => u.Id == id, user);
            return user;
        }
    }
}
