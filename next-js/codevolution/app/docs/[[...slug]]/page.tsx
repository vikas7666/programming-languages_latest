export default async function Docs({params} : {params : Promise<{slug :string}> } ){

    const { slug }  =  await params;

    if(slug.length ===2){
        return(
            <div>
                Viewing docs of feature slug {slug[0]} and concept {slug[1]}
            </div>
        )
    }else if(slug?.length ==1){
        return(
            <div>
                Viewing docs of feature slug {slug[0]}
            </div>
        )
    }
    return (<p>Product Details Page {slug}</p>)
}