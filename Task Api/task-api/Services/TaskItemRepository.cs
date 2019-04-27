using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task_api.Models;

namespace task_api.Services
{
    public class TaskItemRepository : ITaskItemRepository
    {
        private readonly IMongoCollection<TaskItem> _tasks;

        public TaskItemRepository(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("TaskDb"));
            var database = client.GetDatabase("Tasks");
            _tasks = database.GetCollection<TaskItem>("Tasks");
        }

        public async Task<TaskItem> CreateTaskItem(TaskItem taskItem)
        {
            await _tasks.InsertOneAsync(taskItem);
            return taskItem;
        }

        public async Task DeleteTaskItem(string id)
        {
            await _tasks.DeleteOneAsync(t => t.Id == id);
            return;
        }

        public async Task<TaskItem> GetTaskItem(string id)
        {
            return await _tasks.Find(t => t.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<TaskItem>> GetTaskItems()
        {
            return await _tasks.Find(task => true).ToListAsync();
        }

        public async Task<TaskItem> UpdateTaskItem(string id, TaskItem taskItem)
        {
            await _tasks.ReplaceOneAsync(t => t.Id == id, taskItem);
            return taskItem;
        }
    }
}
