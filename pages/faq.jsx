import FAQScreen from '../src/screens/FAQScreen'

// SSR - Rodar em toda requisição, para rodar precisar do comando START
// export async function getServeSideProps() {

// SSG - Roda SOMENTE em Build Time (Com Exceção do modo DEV), comando BUILD
export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body;
        })

    return {
        props: {
            faq
        }
    }
}

export default FAQScreen;

// export default function FAQPage({ faq }) {
//     // const[faq, setFaq] = useState([]);

//     // useEffect(() => {
//     //     

//     // })

//     return (
//         <div>
//             <PageTitle title='FAQ' />
//             <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
//             <Link href="/">
//                 Ir para a home
//             </Link>
//             <ul>
//                 {faq.map(({ answer, question }) => (
//                     <li key={question}>
//                         <article>
//                             <h2>{question}</h2>
//                             {answer}
//                         </article>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }