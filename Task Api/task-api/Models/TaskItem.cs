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
        public String _id { get; set; }

        [BsonElement("title")]
        public String title { get; set; }

        [BsonElement("assignee")]
        public String assignee { get; set; }

        [BsonElement("storyPoints")]
        public int storyPoints { get; set; }

        [BsonElement("assignedColumn")]
        public int assignedColumn { get; set; }
        [BsonElement("user")]
        public User assignedUser { get; set; }

    }
}
