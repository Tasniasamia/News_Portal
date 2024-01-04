import React from 'react';
import PlainLayout from "@/components/Master/Plain-Layout";
import NewsList from '@/Components/NewsList';
import PopularList from '@/Components/PopularList';
import Hero from '@/Components/Hero';

async function getData() {
    let Slider = (await (await fetch(`${process.env.HOST}/api/News_list/type?type=Slider`)).json())['data']
    let Featured = (await (await fetch(`${process.env.HOST}/api/News_list/type?type=Featured`)).json())['data']
    let Popular = (await (await fetch(`${process.env.HOST}/api/News_list/type?type=Popular`)).json())['data']
    // let Latest = (await (await fetch(`${process.env.HOST}/api/News_list/latest`)).json())['data']
    let Latest = (await (await fetch(`${process.env.HOST}/api/News_list/type?type=Latest`)).json())['data']

    return {Slider:Slider,Featured:Featured,Popular:Popular,Latest:Latest}
}
export default async function Home() {
  const data = await getData();

  return (
   <div>
<PlainLayout> 
<Hero featured={data['Featured']} slider={data['Slider']}/>
            <div className="container mt-5">
                <h5>LATEST</h5>
                <hr className=""/>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                        <NewsList latest={data['Latest']}/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                        <PopularList popular={data['Popular']}/>
                    </div>
                </div>
            </div>

            </PlainLayout> 
   
   </div>
  )
}
