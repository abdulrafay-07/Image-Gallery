import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(",");

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            <a href={image.pageURL} target="_blank" >Photo by {image.user}</a>
            </div>
            <ul>
            <li>
                <strong>Likes: </strong>
                {image.likes}
            </li>
            <li>
                <strong>Views: </strong>
                {image.views}
            </li>
            <li>
                <strong>Downloads: </strong>
                {image.downloads}
            </li>
            </ul>
        </div>
        <div className="px-6 py-4 flex gap-x-2 text-sm">
            {
                tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-gray-700 bg-gray-300 rounded-full">
                        #{tag}
                    </span>
                ))
            }
        </div>
        </div>
    )
}

export default ImageCard;