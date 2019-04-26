using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task_api.Models;

namespace task_api.Services
{
    public interface IUserRepository
    {
        Task<User> GetUser(string id);
        Task<List<User>> GetUsers();
        Task<User> CreateUser(User user);
        Task<User> UpdateUser(string id, User user);
        Task DeleteUser(string id);
    }
}
