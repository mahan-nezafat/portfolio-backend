import { connectToDb } from "../../src/api/handlers/adapter";
import { getAll, getOne } from "../../src/repository/blogs.repository";
import { BlogInstance } from "../../src/repository/blogs.repository";


describe("getting blogs data", () => {
    
    it("checks if a blog is matched with blog schema",  () => {
        const newBlog = new BlogInstance(
            1,
            "how are you? ",
            "notpublished",
            "/images/2",
            1,
            1,
            "greet",
            1,
            "hi im mahan",
            [{ paragraph: "hey how you doing ?" }],
            "en"
        );
        expect.assertions(1);
        try {
            console.log(newBlog)
            // await connectToDb();
            // const blog = await getOne(3);
            // expect(blog).toMatchObject(newBlog);
        } catch (error) {
            console.log(error)
        }
    });
});
