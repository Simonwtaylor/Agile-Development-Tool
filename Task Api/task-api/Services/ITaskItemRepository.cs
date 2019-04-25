using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task_api.Models;

namespace task_api.Services
{
    public interface ITaskItemRepository
    {
        Task<TaskItem> GetTaskItem(string id);
        Task<List<TaskItem>> GetTaskItems();
        Task<TaskItem> CreateTaskItem(TaskItem taskItem);
        Task<TaskItem> UpdateTaskItem(string id, TaskItem taskItem);
        Task DeleteTaskItem(string id);
    }
}
