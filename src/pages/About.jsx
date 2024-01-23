import React from 'react'
import chairman from '../Assets/chairman.jpg'

function About() {
  return (
    <div className='flex items-center flex-col font-worksans'>

      <div className="w-full h-[50vh] bg-[url('Assets/img2.jpeg')] bg-cover flex justify-center items-center text-white text-5xl">
        About Us</div>
      <div className='w-[70%] mt-14 mb-8 text-lg'>
        <span className='text-[#1b2852] font-semiBold text-3xl mr-3'>Bharat School</span> is a private, coeducational school. We are located in Vill. Bilaspur Khurd, Gurugram. Since our founding in 1999, we have earned a reputation for academic excellence by offering the best, most well-rounded educational experience in the region.
      </div>

      <div className='text-[#1b2852] text-4xl font-bold mt-12'>Our Mission</div>
      <div className='bg-[#1b2852] w-48 h-1 my-1'></div>
      <div className='w-[70%] mt-5 mb-12 text-lg text-slate-600'>
        The Mission of The School is to empower our children to achieve their greatest potential both as students and as members of their communities.
      </div>

      <div className='bg-slate-200 w-full flex flex-col items-center pb-5'>

        <div className='text-[#1b2852] text-4xl font-bold mt-12'>Core Values</div>
        <div className='bg-[#1b2852] w-48 h-1 my-1'></div>

        <div className='w-full flex flex-row px-[15%] mt-12 mb-8 max-[700px]:flex-col'>
          <ul className='text-lg text-slate-600 flex flex-col gap-5 mb-5'>
            <li className='w-[80%]'>
              <div className='text-[#1b2852] text-2xl font-medium mb-3'>Fostering Academic Excellence</div>
              <div className='text-base'>By supporting skilled and dedicated teachers who maintain high academic standards, motivate our students and collaborate with our families
              </div>
            </li>
            <li className='w-[80%]'>
              <div className='text-[#1b2852] text-2xl font-medium mb-3'>Nurturing the Whole Child</div>
              <div className='text-base'>By creating engaged learners, encouraging honesty and guiding social and emotional development</div>
            </li>
            <li className='w-[80%]'>
              <div className='text-[#1b2852] text-2xl font-medium mb-3'>Ensuring a Safe Environment</div>
              <div className='text-base'>By promoting mutual respect in our diverse community of students, teachers and families</div>
            </li>
          </ul>

          <ul className='text-lg text-slate-600 flex flex-col flex-wrap gap-5'>
          <li className='w-[80%]'>
              <div className='text-[#1b2852] text-2xl font-medium mb-3'>Developing Critical Thinkers</div>
              <div className='text-base'>By encouraging intellectual curiosity and rewarding independent and creative problem solvers</div>
            </li>
            <li className='w-[80%]'>
              <div className='text-[#1b2852] text-2xl font-medium mb-3'>Building Partnership</div>
              <div className='text-base'>By welcoming our families, staff and members of the wider community to participate in and celebrate the successes of our students</div>
            </li>
          </ul>

        </div>
      </div>

      <div className='w-full flex flex-col items-center my-8'>
        <div className='text-[#1b2852] text-4xl font-bold mt-16 text-center underline underline-offset-4'>Message From The Chairman</div>
        <div className='w-full px-[15%] mt-12 mb-8 text-lg text-slate-600'>
          <img src={chairman} alt="chairman" className='w-[20%] border-solid border-4 p-2 border-[#1b2852] float-left mr-6 mb-3' />
          In order to succeed, we must first believe that we can. It’s a matter of great pride to pen down the message for Aagaaz-17 the annual school magazine. Education is the basis of all progress. Its purpose is to inculcate humanitarian values, wisdom, compassion, courage and reliability in students. Academic excellence along with active participation in co-curricular activities complete the process of education and it gives me immense pleasure that the school is progressing in all its endeavours towards the overall development of the students. The seeds of an idea sown in 1994 have quickly grown into strong saplings. The school has marched forward to spread the light of education and pave the path of excellence for every student. It is heartening to see the achievements of the students and the school’s progress throughout the year. I hope the school graduates will become leaders of their chosen fields and contribute positively towards the progress of our nation and of humanity at large. May the beacon of truth and knowledge show us the right path.
        </div>
      </div>

    </div>
  )
}

export default About