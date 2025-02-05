// import { connectToDb } from "../../src/api/handlers/adapter";

const getOne = () => jest.fn(() => {
    return new Promise(())
})
// jest.mock("getOne", () => jest.createMockFromModule("getOne"));
describe("getting blogs data", () => {
    beforeAll(async () => {
        
        // await connectToDb();
        // console.log("connected to db");
    });
   
    it("check if a blog is fetched from db", async () => {
        const blog = getOne();
        console.log(blog);
        return blog;
    });
});


