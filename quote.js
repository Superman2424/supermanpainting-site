
export default function Quote() {
  return (
    <div className='p-6 max-w-2xl mx-auto space-y-4'>
      <h1 className='text-3xl font-bold'>Request a Quote</h1>
      <form action="https://formspree.io/f/yourformid" method="POST" className='space-y-4'>
        <input type="text" name="name" placeholder="Full Name" required className='w-full p-2 border rounded' />
        <input type="email" name="email" placeholder="Email" required className='w-full p-2 border rounded' />
        <input type="text" name="phone" placeholder="Phone" className='w-full p-2 border rounded' />
        <textarea name="details" placeholder="Project Details" rows="5" className='w-full p-2 border rounded'></textarea>
        <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded'>Submit</button>
      </form>
    </div>
  );
}
