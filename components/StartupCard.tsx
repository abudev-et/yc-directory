import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import { Button } from './ui/ui/button';

const StartupCard = ({post}: {post: StartupTypeCard}) => {
    const {
        _createdAt,
        views,
        author,
        title,
        category,
        author: {_id: authorId,name,},
        _id,
        image,
        description,
      } = post;
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                 <EyeIcon className='size-6 text-primary'/>
                 <span className='text-16-medium'>{views}</span>
            </div>
        </div>

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    {name}
                </Link>
                <Link href={`/user/${_id}`}>
                   <h3 className='text-26-semibold line-calm-1'>{title}</h3>
                </Link>      
            </div>
            <Link href={`/user/${authorId}`}>
                <Image src="https://placehold.co/48*48" alt={author?.name!} width={48} height={48} className="rounded-full" />
            </Link>  
        </div>

        <Link href={`/startup/${_id}`}>
            <p>{description}</p>
            <img src={image} alt="placeholder" className='startup-card_img'/>
        </Link>
        <div className='flex-between gap-3 mt-5'>
            <Link href={`/?query=${category.toLowerCase()}`}>
                <p className='text-16-medium'>{category}</p>
            </Link>
            <Button className='startup-card_btn' asChild>
             <Link href={`/startup/${_id}`}>Details</Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard