import PopularList from "@/components/PopularList";
import PlainLayout from "@/components/Master/Plain-Layout";
import CommentsList from "@/components/CommentsList";
import NewsDetails from "@/components/NewsDetails";

async function getData(id) {
    let Details = (await (await fetch(`${process.env.HOST}/api/News_list/details?id=${id}`)).json())['data']
    let Popular = (await (await fetch(`${process.env.HOST}/api/News_list/type?type=Popular`)).json())['data']
    let Comments = (await (await fetch(`${process.env.HOST}/api/Comments/News/?news_list_id=${id}`)).json())['data']
    return {Popular:Popular,Details:Details,Comments:Comments}
}


const Page = async (props) => {
console.log(props);
    let id=props.searchParams['id']
  
    let data= await getData(id)
    console.log("Details data",data);

    console.log(props);

  return (
       <PlainLayout>
           <div className="container mt-2">
               <div className="row">
                   <div className="col-md-9  col-lg-9 col-sm-12 col-12 px-3">
                        <div className="card">
                            <NewsDetails details={data['Details']}/>
                            <CommentsList postID={id} data={data['Comments']}/>
                        </div>
                   </div>
                   <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                       <PopularList popular={data['Popular']}/>
                   </div>
               </div>
           </div>
       </PlainLayout>
  )
}
export default Page;