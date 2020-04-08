import { ApolloClient } from "apollo-client";
import { getSprintById } from "../queries";

export class GraphQLService {
  public static getSprintById = async(
    client: ApolloClient<any> | undefined,
    id: number,
  ) => {
    try {
      if (!client) return null;

      const res = await client.query({
        query: getSprintById,
        variables: {
          id: +id,
        }
      });

      if (res.errors && res.errors.length > 0) {
        return null;
      }

      if (res.data) {
        return res.data;
      }

      return null;
    } catch (error) {
      console.log(error);
    }
  }
}