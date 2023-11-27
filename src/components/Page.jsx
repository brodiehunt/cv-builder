

function Page({details}) {
    
    return (
        <div className="page" >
            <div className="eg">{details.fullName}</div>
            <div className="eg">{details.email}</div>
            <div className="eg">{details.phone}</div>
            <div className="eg">{details.address}</div>
        </div>
    )
}

export default Page;