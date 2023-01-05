import React, { Fragment } from 'react'
import { useQuery } from 'react-query'
import './lists.scss'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

export const Lists = () => {
  const {data , isLoading} = useQuery("services",()=>  fetch(`https://dafhhtmvyudvxztkllpd.supabase.co/rest/v1/services?select=*`, {
    headers: {
      apikey: import.meta.env.VITE_ANON_KEY,
      Authorization: "Bearer" + import.meta.env.VITE_ANON_KEY,
    },
  }).then((res) => res.json()))


  return (
    <>
      <ul className='lists'>
          {data?.map((d)=>{
            return(
              <Fragment key={d.id}>
                  <li className='list-item'>
                  <span>{d.services}</span>
                  <a href={`mailto:madhuri.basant007@gmail.com?
                  &subject=${d.services} 
                  `}><HiOutlineArrowNarrowRight color='white' fontSize="20px"/></a>
                  </li>

              </Fragment>
            )
          })}
      </ul>       
    </>
  )
}
