import React from "react";


class Index extends React.Component {
    render(){
        const styles = {
            width:'10%',
            align:'center', 
            textAlign:'center', 
            margin:'auto',
            backgroundColor:'cyan'
        }
        return(
        <div>
            <div style={styles}>
                <p>Hello World</p>
            </div>
        </div>

        // <style>{`

        //     container,main{
        //         alig:center,
        //     }

        // `}</style>
        );
    }
};


export default Index;

