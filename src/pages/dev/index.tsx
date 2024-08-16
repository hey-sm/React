/** @format */

import React from 'react'
import { pick, merge } from 'lodash-es'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
export default function App() {
   const a = {
      name: 'Alice',
      age: 25,
      sex: 'b',
      address: '123 Main St'
   }

   const b = {
      age: 30,
      sex: '',
      email: 'alice@example.com'
   }

   // 使用 pick 方法从 a 中挑选出 b 中存在的属性
   const pickedA = pick(a, Object.keys(b))

   // 使用 merge 方法将挑选出的属性合并到 b 中
   //    const mergedB = merge(b, pickedA)
   const mergedB = { ...b, ...pickedA }

   console.log(pickedA, mergedB)

   const id1 = nanoid()
   const id2 = nanoid()
   const id3 = nanoid()
   const id4 = nanoid()

   return (
      <Container>
         <div>
            <div className="loader"></div>
         </div>

         <div>{id1}</div>
         <div>{id2}</div>
         <div>{id3}</div>
         <div>{id4}</div>
      </Container>
   )
}

const Container = styled.div`
   /* HTML: <div class="loader"></div> */
   .loader {
      height: 15px;
      aspect-ratio: 5;
      -webkit-mask: linear-gradient(90deg, #0000, #000 20% 80%, #0000);
      background: radial-gradient(closest-side at 37.5% 50%, #000 94%, #0000) 0 / calc(80% / 3) 100%;
      animation: l48 0.75s infinite linear;
   }
   @keyframes l48 {
      100% {
         background-position: 36.36%;
      }
   }
`
