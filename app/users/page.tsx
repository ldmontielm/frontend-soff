
import {Header,Table} from "./components"

export default async function Page(){
    return(
        <div className="mx-auto max-w-7xl p-4">
            <Header/>
            <Table/>
        </div>
    )
}