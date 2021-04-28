// image should be of 300 X 180 dimensions
// description should be min 120 & max 150 characters

export const blogs = [
  {
    key: "1",
    code: "blog-1",
    date: "28th May'20",
    title: "Coding Linear Regression",
    author: "Rasansha Luthra",
    description:
      "An article to make the person more familiar and simplify the concept of linear regression. It is a step by step guide and explanation of writing the code of linear regression using python language.",
    link: "https://link.medium.com/NAQlpHWOVab",
    image: require("../assets/blogs/blog-1.jpg")
  },
  {
    key: "2",
    code: "blog-2",
    date: "17th Jul'20",
    title: "Kotlin vs. Java: Which is better?",
    author: "Tanishq Sehgal",
    description:
      "This article talks about how Kotlin secures an edge over Java, and whether it is the end of Java or not and how long will Java persist in the app development industry. Properties of Kotlin, like it’s Brachylogy, Interoperability, Billion Dollar Mistake, Checked Exceptions, Co-Routines have been discussed in this article.",
    link: "https://medium.com/analytics-vidhya/6c0a4f145309",
    image: require("../assets/blogs/blog-2.jpg")
  },
  {
    key: "3",
    code: "blog-3",
    date: "2nd Nov'20",
    title: "Google Sign-in in Android using Firebase",
    author: "Tanishq Sehgal",
    description:
      "Google Sign-in is a secure way to authenticate users in mobile apps. This article basically deals with the implementation of Google Sign-In in Android Studio With Firebase using Kotlin programming language.",
    link: "https://medium.com/swlh/73cf6a5a989e",
    image: require("../assets/blogs/blog-3.jpg")
  },
  {
    key: "4",
    code: "blog-4",
    date: "27th Apr'21",
    title: "Top 5 technologies to kickstart...",
    author: "Vaibhav Choudhary",
    description:
      "The trending technologies which are currently dominating the CS domain and can give you a good start.",
    link: "https://medium.com/@vaibhavch29/829ce12c0b9f",
    image: require("../assets/blogs/blog-4.jpg")
  }
];

export const blogsData = blogs.reverse();
