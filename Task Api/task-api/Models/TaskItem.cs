using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace task_api.Models
{
    public class TaskItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("storyPoints")]
        public int StoryPoints { get; set; }

        [BsonElement("assignedColumn")]
        public int AssignedColumn { get; set; }
        [BsonElement("user")]
        public User AssignedUser { get; set; }

    }
}
