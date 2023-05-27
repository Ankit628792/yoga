import Navbar from '@/components/Navbar'
import HeaderImage from '../images/header.svg'
import PersonImage from '../images/person.svg'
import YogaImage from '../images/yoga.png'
import FitnessImage from '../images/firness.png'
import MeditationImage from '../images/meditation.png'
import Salutation from '../images/salutation.png'
import Running from '../images/running.png'
import SitUps from '../images/sit-up.png'
import TreePosture from '../images/tree.png'
import Phone from '../images/phone.png'

const data1 = [
  {
    id: 1,
    title: 'Yoga',
    desc: 'Choose from hundreds of programs in styles ranging from Vinyasa, Hatha, Restorative and much more.',
    image: YogaImage.src
  },
  {
    id: 2,
    title: 'Fitness',
    desc: 'Get your sweat on with cardio, strength, and movement focused fitness, dance and mobility classes.',
    image: FitnessImage.src
  },
  {
    id: 3,
    title: 'Meditation',
    desc: 'Take a moment for yourself to tune in with one of our guided meditation or breath work classes',
    image: MeditationImage.src
  },
]

const reviews = [
  {
    id: 1,
    name: 'Kristina Baroody',
    designation: 'Student',
    comment: "Since 2016, we've been offering online classes to happy yogis from",
    image: `https://randomuser.me/api/portraits/men/${Math.round(Math.random() * 100)}.jpg`
  },
  {
    id: 2,
    name: 'Hasan roki',
    designation: 'Student',
    comment: "I love being able to choose any type of program, length, instructor",
    image: `https://randomuser.me/api/portraits/men/${Math.round(Math.random() * 100)}.jpg`
  },
  {
    id: 3,
    name: 'Tanvir Lewis',
    designation: 'Student',
    comment: "Excellent platform, very pleased with the quality to our new build",
    image: `https://randomuser.me/api/portraits/men/${Math.round(Math.random() * 100)}.jpg`
  },
]

const blogs = [
  {
    id: 1,
    createdAt: 'April 7, 2023',
    readTime: '10 min',
    title: 'What are sun salutations? start your day right with',
    desc: "It's a simple question that we get asked a lot as yoga instructors. What is a sun Salutation and why is it important?",
    image: Salutation.src
  },
  {
    id: 2,
    createdAt: 'April 15, 2023',
    readTime: '16 min',
    title: 'What causes pigmentation and dull skin ?',
    desc: "First things, pigmentation is very normal and you shouldn't be sad to have it, because just like wrinkles, pigmentation can be a sign of aging",
    image: Running.src
  },
  {
    id: 3,
    createdAt: 'April 21, 2023',
    readTime: '09 min',
    title: '10 Things you should know before you perform yoga',
    desc: "The fact that you’re interested in starting a yoga class is a step in the right direction. There are many ways that you can make your yoga practice work for you, even if you only have a few minutes each day to dedicate to it. Use these yoga beginner tips as a jumping-off point to get started. ",
    image: TreePosture.src
  },
  {
    id: 4,
    createdAt: 'April 22, 2023',
    readTime: '22 min',
    title: 'How to use yoga to prevent or reverse the health issues?',
    desc: "First things, pigmentation is very normal and you shouldn't be sad to have it, because just like wrinkles, pigmentation can be a sign of aging",
    image: Phone.src
  },
  {
    id: 5,
    createdAt: 'April 27, 2023',
    readTime: '6 min',
    title: '5 Yoga moves for post nasal drip relief for better health',
    desc: "First things, pigmentation is very normal and you shouldn't be sad to have it, because just like wrinkles, pigmentation can be a sign of aging",
    image: SitUps.src
  },
]

const programs = [
  {
    id: 1,
    title: '200+ Hour Yoga Training',
    desc: [
      `170 YOGA POSES`,
      `YOGA PHILOSOPHY`,
      `ANATOMY AND PHYSIOLOGY`,
      `TEACHING TECHNIQUES & SEQUENCING`,
      `50+ Meditation Techniques`
    ],
    image: 'https://www.arhantayoga.org/wp-content/uploads/2022/09/Hatha-Yoga-Teacher-Training.webp'
  },
  {
    id: 2,
    title: 'Arhanta Special Training',
    desc: [
      `Principles of holistic medicine`,
      `Ayurvedic diet & nutrition`,
      `Meditation practices`,
      `Traditional Yoga recipes`,
      `Yoga therapy`
    ],
    image: 'https://www.arhantayoga.org/wp-content/uploads/2022/09/Online-Yoga-School.webp'
  },

  {
    id: 3,
    title: 'The Spirit Of Ayurveda',
    desc: [
      `Overcoming addictive behaviour`,
      `Ayurvedic philosophy`,
      `How to cultivate strong digestion`,
      `Principles of holistic medicine`,
      `Harnessing the breath for self healing`
    ],
    image: 'https://sivanandayoga.org/wp-content/uploads/2022/12/Sivananda-Thailand-Advanced-Teachers-training-600x400-02.jpg'
  },

]

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <header className='bg-gradient-to-b from-white to-sky-100 w-full'>
          <Navbar />
          <div className='flex flex-col items-center justify-center gap-4 p-4 lg:p-0 pt-8 min-h-[90dvh]'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-900 max-w-2xl text-center'>Yoga should be fun, not boring</h1>
            <p className='text-base sm:text-lg text-gray-400 max-w-2xl text-center'>Practice with world class teachers in the comfort of your home with our online yoga and meditation classes and programs</p>
            <img className='max-w-xl filter drop-shadow' src={HeaderImage?.src} alt="" />
          </div>
        </header>

        <section className='min-h-[50dvh] flex flex-col items-center gap-3 justify-center p-4 lg:p-0'>
          <h1 className='text-3xl sm:text-4xl font-medium text-blue-900 text-center'>Daily live classes & 5,000+ on demand</h1>
          <p className='text-base sm:text-lg text-gray-400 text-center max-w-3xl'>Deepen yor practice with upto 16 different styles - Vinyasa, Hatha, Kundalini, Yin, Lyengar Yoga, Barre, Pilates, Cardio, Strength, HIIT, and more. </p>
        </section>

        <section className='flex items-center flex-wrap justify-around gap-10 w-full max-w-7xl mx-auto py-10 px-4'>
          <div className='flex-shrink-0 w-full max-w-lg'>
            <img src={PersonImage.src} className='filter drop-shadow' alt="" />
          </div>
          <div className='w-full max-w-xl lg:max-w-lg'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-900 text-center lg:text-left'>Start with us the body and mind cleansing</h1>
            <p className='text-gray-400 my-4 text-center lg:text-left'>No one rejects, dislike, or avoids pleasure itself, because it is pleasure, but because whose who do not know how to purse</p>
            <button className='py-2 text-lg px-6 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-100 text-white block mx-auto lg:mx-0'>View all programs</button>
          </div>

          <div className='w-full flex items-center justify-around flex-wrap py-10'>
            {
              data1.map(item => <div key={item.id} className='text-center'>
                <img src={item.image} className='w-28 mx-auto' alt="" />
                <h1 className='text-2xl font-medium text-blue-900 mt-3 mb-2'>{item.title}</h1>
                <p className='text-gray-400 max-w-xs'>{item.desc}</p>
              </div>)
            }
          </div>
        </section>

        <section className='py-10 lg:py-20 w-full max-w-7xl mx-auto' id='programs'>
          <h1 className='text-4xl sm:text-5xl text-blue-900 font-semibold mb-4 lg:mb-10 text-center'>Popular Programs</h1>
          <div className='flex flex-wrap items-start justify-center gap-10 p-4'>
            {
              programs.slice(0, 3).map(item => (
                <div key={item.id} className='max-w-sm p-6 pl-10 bg-white shadow-lg rounded-lg shadow-gray-100'>
                  <img src={item.image} className='w-60 h-48 object-cover mb-4 rounded-lg mx-auto filter drop-shadow' alt="" />
                  <h1 className='text-blue-900 font-medium text-xl sm:text-2xl text-center'>{item.title}</h1>
                  <ul className='text-gray-400 uppercase space-y-1 my-4 text-sm sm:text-base'>
                    {
                      item.desc.map(list => <li className='list-disc list-outside' key={list}>{list}</li>)
                    }
                  </ul>
                  <button className='py-2 text-lg px-6 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-100 text-white block mx-auto'>Enroll Now</button>
                </div>
              ))
            }
          </div>
        </section>

        <section className='flex items-center flex-wrap gap-10 justify-around w-full max-w-7xl py-10 lg:py-20 px-4' id='aboutUs'>
          <div className='flex flex-col gap-10'>
            {
              reviews.map((item, i) => <div key={item.id} className={`flex items-center gap-4 rounded-lg shadow-lg shadow-gray-100 max-w-md p-2 transform ${i == 1 ? '2xl:-translate-x-20' : ''}`}>
                <div className='w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden'>
                  <img src={item.image} className='w-full h-full object-cover' alt="" />
                </div>
                <div className='flex-grow'>
                  <p className='text-gray-400'>{item.comment}</p>
                  <h1 className='text-blue-900 font-medium mt-2'>{item.name},{item.designation}</h1>
                </div>
              </div>)
            }
          </div>
          <div className='w-full max-w-xl lg:max-w-lg'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-900 text-center lg:text-left'>What our students love what we do</h1>
            <p className='text-gray-400 my-4 text-center lg:text-left'>Since 2006, we've been offering online classes to happy yogis from all over the world. We look forward to having you join us.</p>
            <button className='py-2 text-lg px-6 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-100 text-white block mx-auto lg:mx-0'>View all strory</button>
          </div>
        </section>


        <section className='py-10 lg:py-20 w-full max-w-7xl mx-auto p-4' id='blogs'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-blue-900 font-semibold mb-10 text-center'>Featured Blog Posts</h1>
          <div className='flex flex-wrap items-start justify-center gap-10'>
            {
              blogs.slice(0, 3).map(item => (
                <div key={item.id} className='max-w-sm py-4 px-6 bg-white shadow-lg rounded-lg shadow-gray-100'>
                  <img src={item.image} className='w-48 h-48 p-4 rounded-lg mx-auto filter drop-shadow' alt="" />
                  <h1 className='text-blue-900 font-medium text-2xl line-clamp-2'>{item.title}</h1>
                  <p className='text-gray-400 my-2 text-justify line-clamp-3'>{item.desc}</p>
                  <div className='flex items-center gap-4 text-gray-400 mt-6'>
                    <div className='flex items-center gap-1'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                      </span>
                      <span>{item.createdAt}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>{item.readTime} read</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <footer className='py-6 bg-sky-500 w-full text-center text-white text-sm sm:text-base'>
          <p>Copyright&copy;2023 Yoga. All rights reserved</p>
        </footer>

      </main>
    </>
  )
}
