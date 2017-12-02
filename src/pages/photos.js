import React, {Component} from 'react'
import MainLayout from "../layouts/main-layout"
import Link from "gatsby-link"
import convert from 'xml-js'

class Photos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }

    async componentDidMount() {
        const BASE_URL = "http://gridview-test-bucket.s3.amazonaws.com/?prefix=test_folder"
        const URL = "https://s3.amazonaws.com"
        const bucket = "gridview-test-bucket"
        let response = await fetch(BASE_URL).then(blob => blob.text())
        let blob = convert.xml2js(response, {
            compact: true,
            spaces: 4
        });
        let data = blob.ListBucketResult.Contents
        data.shift()
        let path = data.map(link => `${URL}/${bucket}/${link.Key._text}`)
        this.setState({
            img: [...path]
        })
        //console.log(this.state.img)
    }

    render( /*{ transition }*/ ) {
        return(
        <div>
            <MainLayout title="Photos">
                    {this.state.img.map(img => {
                        return <a href={img} target="_blank">
                                    <img src={img} />
                                </a>
                    })}
            </MainLayout>
        </div>
        )
    }
}

export default Photos