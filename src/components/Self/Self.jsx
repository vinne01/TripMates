import React from 'react'
import { Link } from 'react-router-dom'

function Self() {
  return (
    <div>
       <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600">About Me</h1>
        <p className="text-xl text-gray-600 mt-2">Get to know a little bit about who I am.</p>
      </header>

      <section className="space-y-6">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            src="https://ik.imagekit.io/vinaymry/50ad7d62-1753-406f-8c58-5fa85a8245b6-modified.jpg?updatedAt=1734859256834" // Replace with your image URL
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
          />
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">Vinay Kumar Maurya</h2>
          <p className="text-gray-500 text-lg">Web Developer | Designer</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Who am I?</h3>
          <p className="text-lg text-gray-700 mt-2">
            Hello! I'm vinay kumar maurya, a passionate web developer with a love for creating intuitive
            and responsive websites. I have experience working with HTML, CSS, JavaScript, React,
            and other modern web technologies. I’m always excited to learn new things and grow in my
            field.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">My Skills</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
            <li>HTML5 & CSS3</li>
            <li>JavaScript & React</li>
            <li>Node.js & Express</li>
            <li>UI/UX Design</li>
            <li>Git & GitHub</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">My Hobbies</h3>
          <p className="text-lg text-gray-700 mt-2">
            In my free time, I love hiking, playing video games, and exploring new tech trends.
            I'm also passionate about photography and often spend weekends capturing beautiful
            landscapes and moments.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
       to ="mailto:johndoe@example.com"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Self
