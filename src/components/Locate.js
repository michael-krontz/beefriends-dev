import { Card, Form } from 'react-bootstrap'
import React from 'react'
import LocateButton from './LocateButton'


export default function Locate() {
  return (
    <Card className='locate-card'>
        <Form>
        <LocateButton></LocateButton>
        </Form>
    </Card>
  )
}
