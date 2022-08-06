import React from "react";
import {Text} from React;
// show report of collection
function Report(props) {
    return (
        props.map((doc) => {
            <div zindex={1}>
                <Text>Country: {doc.country}</Text>
                <Text>Name: {doc.name}</Text>
                <Text>Email: {doc.email}</Text>
            </div>
        })
    )
}
export default Report;