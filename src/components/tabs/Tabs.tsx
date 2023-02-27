import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { ICategory } from 'types'
interface IpropType {
    categories: ICategory[]
}

function Tabs({ categories }: IpropType) {
    const router = useRouter()

    const isActiveLink = (category: ICategory) => {
        return category.attributes.Slug === router.query.category
    }
    const hendleOnSearch = (query: string) => {

    }
    return (
        <div className='my-8 flex justify-between items-center capitalize border-b-2 border-gray-100'>
            <ul className='flex items-center'>
                <li className={'mr-6 pb-6 border-b-4 rounded-sm font-bold' + `${router.pathname === "/"
                    ? "border-green-600 text-green-600 font-bold"
                    : "border-white text-gray-500"}`}>
                    <Link href="#">
                        Recent
                    </Link>
                </li>
                {
                    categories.map((category) => (
                        <li key={category.id} className={'mr-6 pb-6 border-b-4 rounded-sm ' + `${isActiveLink(category)
                            ? "border-green-600 text-green-600 font-bold"
                            : "border-white text-gray-500 font-bold"}`}>
                            <Link href={`/category/${category.attributes.Slug}`}>
                                {category.attributes.Title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='flex justify-center items-center'>
                <FaSearch
                    className='h-4 fill-gray-500'
                />
                <input
                    onChange={(e) => hendleOnSearch(e.target.value)}
                    type="text"
                    placeholder='Search'
                    className='outline-none px-2 py-1 ml-1' />
            </div>
        </div>
    )
}

export default Tabs