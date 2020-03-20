import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {

    constructor () {
        super();

        this.state = {

            companys: []
        }
    }

    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:3030/companys?userId=' + props.userId, {headers: props.token})

    }

    render() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div><h3>Tus Companias</h3></div>
                </div>
                <div className="col-md-7">
                    <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo, dolorum quos quia voluptatem ducimus fuga suscipit 
                            dignissimos dolore itaque odit tempore aliquam repudiandae qui iusto iste, ut facere laboriosam. Voluptatibus ipsum non possimus
                             esse, sed cupiditate ratione dolores ullam aut iste placeat, doloribus hic, quia error ipsam eveniet atque deserunt magni odio 
                             impedit repellat quas quisquam expedita. Blanditiis nisi velit consequuntur explicabo molestiae odio suscipit impedit labore eos!
                              Exercitationem voluptate fugiat incidunt sit praesentium facilis ad libero recusandae? Modi accusamus nam, ipsum corporis natus 
                              magnam accusantium molestias nobis eius laudantium, optio voluptas maxime assumenda distinctio fugiat voluptates, possimus quos.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
} 

}