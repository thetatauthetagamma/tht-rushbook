// Import the necessary modules and components
import Head from 'next/head';

export default function Home() {
  // const [book, setBook] = useState([]);
  // const [userEmail, setUserEmail] = useState('');
  // const [isBrother, setIsBrother] = useState(false);
  // const [isAdmin, setIsAdmin] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   // Fetch the rushees info from the database
  //   const fetchBook = async () => {
  //     const { data, error } = await supabase.from('THT-Book').select('*')
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log(data);
  //       const sortedData = data.sort((a, b) => {
  //         const likesA = a.Likes.length;
  //         const dislikesA = a.Dislikes.length;
  //         const likesDiffA = likesA - dislikesA;
    
  //         const likesB = b.Likes.length;
  //         const dislikesB = b.Dislikes.length;
  //         const likesDiffB = likesB - dislikesB;
    
  //         // Sort in descending order based on the calculated value (likesDiff)
  //         return likesDiffB - likesDiffA;
  //       });
        
  //       setBook(data || []);
  //     }
  //   };
  //   fetchBook();
  // }, []);

  // useEffect(() => {
  //   // Trigger getRusheeImages function when the book is updated
  //   if (book.length > 0) {
  //     getRusheeImages();
  //   }
  // }, [book]);

  // const getRusheeImages = async () => {
  //   // Get the rushee images from the storage
  //   const updatedBook = await Promise.all(
  //     book.map(async (rushee) => {
  //       if (rushee.imageUrl) {
  //         return rushee;
  //       } else {
  //         const { data: ImageData, error } = await supabase
  //           .storage
  //           .from('rushee')
  //           .download(rushee.Rushee_Uniquename);
  //         if (error) {
  //           console.log(error);
  //           return rushee;
  //         } else {
  //           const blob = new Blob([ImageData], { type: 'image/jpeg' });
  //           const imageUrl = URL.createObjectURL(blob);
  //           return { ...rushee, imageUrl };
  //         }
  //       }
  //     })
  //   );
  //   setBook(updatedBook);
  // };


  return (
    <div>
      <Head>
        <title>THT Rushbook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <div className='flex flex-col items-center p-2'>
        <h1 className='text-6xl lg:text-8xl font-bold text-black py-2 text-center'>Rushbook</h1>
      </div>
    </div>
  );
}