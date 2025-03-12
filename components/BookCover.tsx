import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
type BookCoverVariant="extraSmall"| "small" | "medium" | "regular" | "wide";

const variantStyles:Record<BookCoverVariant,string>={
    extraSmall:'book-cover_extra_small',
    small:'book-cover_extra_small',
    medium:'book-cover_extra_small',
    regular:'book-cover_extra_small',
    wide:'book-cover_extra_small',
}

interface Props{
    classname?:string;
    variant: BookCoverVariant;
    coverCOlor:string;
    coverImage:string;
}

const BookCover = ({
    className,
    variant="regular",
    coverColor='#012848',
    coverImage="https://placehold.co/400x600.png",
  }:Props) => {

  return (
    <div 
    className={cn('relative transition-all duration-300',variantStyles[variant],
        className,
    )}>
       <BookCoverSvg coverColor={coverColor} />
      <div className="absolute z-10" style={{ left: "12%", width: "87.5%", height: "88%" }}>
        <Image 
        src={coverImage} 
        alt="Book cover" 
        fill 
        className='rounded-sm object-fill'/>
      </div>
    </div>
  )
}

export default BookCover
