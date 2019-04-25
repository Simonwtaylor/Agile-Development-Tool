using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace task_api.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("firstname")]
        public string Firstname { get; set; }
        [BsonElement("lastname")]
        public string Lastname { get; set; }
        [BsonElement("email")]
        public string Email { get; set; }
        [BsonElement("role")]
        public string Role { get; set; }
    }
}
