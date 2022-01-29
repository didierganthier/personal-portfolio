import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className='bg-body text-white font-poppins pb-12'>
        <header className='py-6'>
          <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
            <div className="text-2xl">John Doe</div>
            <div className='hidden md:flex space-x-12 items-center'>
              <a href="#" class="text-selected-text">Home</a>
              <a href="#work">My work</a>
              <a href="#clients">Clients</a>
              <a href="#hire"><button className='bg-theme px-6 py-2 font-bold rounded-md'>Hire me</button></a>
            </div>
            <div class="md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
            </div>
          </div>
        </header>
      </main>
    </div>
  )
}
