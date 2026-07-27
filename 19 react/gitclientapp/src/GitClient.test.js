import axios from "axios";
import GitClient from "./GitClient";

// Mock the axios object to return dummy data
jest.mock("axios");

describe("Git Client Tests", () => {
  test("should return repository names for techiesyed", async () => {
    // 1. Arrange: Define the mock response data
    const mockData = {
      data: [
        { name: "appcentricsolutions" },
        { name: "ArrayListDemo" },
        { name: "ArrayListDemo01" }
      ]
    };
    
    // 2. Mock behavior: Make axios resolve with our mock data
    axios.get.mockResolvedValue(mockData);

    // 3. Act: Invoke getRepositories
    const response = await GitClient.getRepositories("techiesyed");

    // 4. Assert: Confirm it returns mocked data instead of calling GitHub
    expect(axios.get).toHaveBeenCalledWith("https://api.github.com/users/techiesyed/repos");
    expect(response.data).toEqual(mockData.data);
    expect(response.data[0].name).toBe("appcentricsolutions");
  });
});