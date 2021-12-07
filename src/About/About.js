import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <main id="about">
                <div className="page-banner">
                    <div className="breadcrumbs"><p>Home &gt; <span>About Us</span></p></div>
                    <div className="page-heading">
                        <h1>About Us</h1>
                    </div>
                </div>
                <article className="page-content" id="about-content">
                    <h2 className="section-title">About Wholefield's</h2>
                    <div className="about-content-container">
                        
                        <div className="about-text">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
                            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>
                        <div className="about-image">
                            <img src="https://www.carolinafarmstewards.org/wp-content/uploads/2013/11/agriculture-arable-barley-265216-1-e1554994937264.jpg" />
                        </div>
                        
                    </div>
                </article>
            </main>
        )
    }
}

export default About
