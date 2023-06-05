/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type Props = {
  messages: {
    Title: string,
    Subtitle: string,
    Card: {
      Title: string,
      Description: string,
      Span: string,
    },
    Form: {
      Name: string,
      Phone: string,
      Email: string,
      Subject: string,
      Message: string,
      Button: string,
    }
  }
}

const Contact = ({messages}: Props) => {
  return (
    <section id='contact' className='w-full pt-28 px-4 mt-8 pb-32 min-[850px]:pt-32'>
    <div className='max-w-[1240px] mx-auto'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        {messages.Title}
      </p>
      <h2 className='py-5'>{messages.Subtitle}</h2>
      <div className='grid lg:grid-cols-5 gap-8 pt-4'>
        {/* left */}
        <div className='col-span-3 h-[380px] lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4'>
            <div>
              <h2 className='py-2'>Julio Bazalar</h2>
              <p>{messages.Card.Title}</p>
              <p className='py-4'>
               {messages.Card.Description}
              </p>
            </div>
            <div>
              <p className='uppercase pt-8'>{messages.Card.Span}</p>
              <div className='flex items-center justify-around py-4'>
                <Link
                  href='https://www.linkedin.com/in/jbzuloaga/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href='https://github.com/julioBZ25'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>
            <form
              action="https://getform.io/f/010664cc-2e37-4d08-9c8c-13e00d33e826" 
              method="POST"
              encType='multipart/form-data'
            >
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>{messages.Form.Name}</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='name'
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>
                    {messages.Form.Phone}
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='phone'
                  />
                </div>
              </div>
              <input type="hidden" name="_gotcha" style={{display:'none !important'}} />
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>{messages.Form.Email}</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='email'
                  name='email'
                  required
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>{messages.Form.Subject}</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='text'
                  name='subject'
                  required
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>{messages.Form.Message}</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows={5}
                  name='message'
                ></textarea>
              </div>
              <div className='flex justify-center py-4'>
                <button className='bg-[#2A23EB] max-w-[252px] h-[57px] px-4 text-white rounded-lg'>
                  {messages.Form.Button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact