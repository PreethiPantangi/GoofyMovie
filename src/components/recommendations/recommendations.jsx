import React from 'react';
import Image from '../image/image'
import './recommendations.css'
import { Link } from 'react-router-dom'

function Recommendations(props) {

    let recommendations = props.data


    function onTrigger(event, id) {
        props.parentCallback(id);
        event.preventDefault();
    }

    if (recommendations.results) {
        return (
            <div>
                {recommendations.results.length ? <div className="recommendations_component">
                    <div className="recommendations_list" >
                        {recommendations['results'].map((recommendation) => (
                            <div className="recommendations_info" key={recommendation.id} >
                                <div className="recommendationsCard" >
                                    <div className="recommendations_image" onClick={e => onTrigger(e, recommendation.id)}>
                                        <Link to={`${recommendation.id}`} >
                                            <Image height={'10%'} width={'60%'} imageType={'small'} url={recommendation.poster_path} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> :
                    <div className="no_recommendations" >
                        <h6 className="textColor">No recommendations</h6>
                    </div>
                }
            </div>
        );
    } else {
        return (<div>Loading data....</div>)
    }
}

export default Recommendations;