import Comment from '../components/Comment'
import comments from '../data/comments'

const Feedback = () => (
  <section className="pt-12 md:pt-24">
    <div className="container mx-auto px-6 lg:px-0">
      <h2 className="text-xl md:text-4xl text-neutral-50 font-medium leading-tight md:leading-snug">Thousand Of <br /> Statisfied ─ Customers</h2>
    </div>
    <div className="relative flex flex-col gap-6 mt-6 md:mt-12">
      <div className="hidden sm:block absolute bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 w-full h-full"></div>
      <div className="flex justify-center gap-3 md:gap-6 px-6 md:px-0 overflow-hidden">
        { comments.slice(0, 5).map((comment, i) => (
          <Comment key={ i } title={ comment.title } content={ comment.content } image={ comment.image } />
        )) }
      </div>
      <div className="flex justify-center gap-3 md:gap-6 px-6 md:px-0 overflow-hidden">
        { comments.slice(5).map((comment, i) => (
          <Comment key={ i } title={ comment.title } content={ comment.content } image={ comment.image } />
        )) }
      </div>
    </div>
  </section>
)

export default Feedback