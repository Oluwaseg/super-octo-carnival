import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "AI Revolution: The Future of Work",
    description:
      "Artificial Intelligence (AI) is transforming industries by automating tasks, enhancing productivity, and creating new job opportunities. The latest advancements in AI promise to redefine the future of work, making it more efficient and innovative.",
    author: "John Doe",
    date: "June 20, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Quantum Computing Breakthrough",
    description:
      "Researchers have achieved a significant milestone in quantum computing, paving the way for faster and more secure computing solutions. This breakthrough is expected to revolutionize fields such as cryptography, material science, and complex simulations.",
    author: "Jane Smith",
    date: "June 18, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "5G Networks: Transforming Connectivity",
    description:
      "The rollout of 5G networks is set to transform connectivity, offering faster speeds, lower latency, and enhanced reliability. This technology is expected to drive innovations in IoT, smart cities, and autonomous vehicles.",
    author: "Alex Johnson",
    date: "June 15, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          {/* <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
