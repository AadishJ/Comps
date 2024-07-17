import { useState } from "react";
import items from "./items.json";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

function Accordion ()
{
    const [ expandedIndex, setExpandedIndex ] = useState( -1 );
    const handleClick = ( id ) =>
    {
        if ( expandedIndex === id )
        {
            setExpandedIndex( -1 );
        }else
            setExpandedIndex( id );
    }
    const content = ( info ) =>
    {
        return ( <div className="bg-gray-200 py-2 px-4 rounded-lg">{ info }</div> );
    }
    const icon = (ifExpanded)=>
    { 
       return ifExpanded ?  (<span><MdKeyboardArrowRight /></span>) :  (<span><MdKeyboardArrowDown/></span>)
    }
    const renderedItems = items.map( ( item ) =>
    {
        let ifExpanded = expandedIndex === item.id;
        return (
            <div key={ item.id }>
                <div className="bg-blue-800 text-white py-2 px-4 cursor-pointer mb-2 rounded-lg flex items-center gap-1" onClick={ () => handleClick( item.id ) }>
                    { item.title }
                    {icon(ifExpanded)}
                </div>
                { ifExpanded && content( item.info ) }
            </div> );
    } )
    return (
        <div className="bg-gray-100 p-2 m-5 rounded-lg">
            { renderedItems }
        </div>
    );
}

export default Accordion;