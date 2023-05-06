import '../../index.css';

function Home() {
    return ( 
    
    <><a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white shadow-md">
            <img
                alt="Home"
                src="https://media.discordapp.net/attachments/973821179888562276/1104265496670503002/Image_4715.png"
                className="h-56 w-full rounded-md object-cover" />

            <div className="mt-2">
                <dl>
                    <div>
                        <dt className="sr-only">Location</dt>

                        <dd className="text-sm text-gray-500">📌 UW 132 St SE, Seattle WA</dd>
                    </div>

                    <div>
                        <dt className="sr-only">Event Name</dt>

                        <dd className="font-medium UWPurple">Junior Bonfire Get Together</dd>
                    </div>
                </dl>
            </div>
        </a>
        
        <a
  href="#"
  className="block rounded-lg p-1 shadow-sm shadow-indigo-100 bg-white shadow-md mt-6 pt-40"
  style={{
    backgroundImage: `url('https://media.discordapp.net/attachments/973821179888562276/1104265496670503002/Image_4715.png')`,
    height: "28vh", // set the height to full viewport height
  }}
>
{/* title container */}
<div className="mx-auto rounded-lg bg-white shadow-lg py-2 px-4">
  {/* event title */}
  <div className="flex items-center justify-start">
    <h1 className="text-sm text-gray-800">Junior Bonfire Get Together</h1>
  </div>
  {/* attendee count */}

  <div className="flex items-center justify-start mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3.5 w-3.5 mr-1 ml-1"
    fill="#000000"
    viewBox="-1 -2 26 26"
    stroke="#000000"
  >
  <path d="M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6 6 0 0 0-12 0 1 1 0 0 0 2 0 4 4 0 0 1 8 0 1 1 0 0 0 2 0Zm0-15a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0ZM6 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM2 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0Z"/>
  </svg>
  <dt className="sr-only">Attendees</dt>
  <dd className="text-sm text-gray-500">30/40</dd>
  <div className="text-gray-500 text-sm font-medium ml-auto">
    May 10, 2023
  </div>
</div>

  

  {/* event date */}
</div>

</a>

            
            </>

   );
}

export default Home;