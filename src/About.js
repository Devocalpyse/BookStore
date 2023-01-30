import React from 'react';
import { Image, Row, Stack } from 'react-bootstrap';
import pfp from './SW.png';

export default function About() {
  return (
    <Row>
      <div className='col-12 m-4'>
        <div className='row'>
          <div className='col-6'>
            <h2 id='name' className='display-3'>
              Johann Voss
            </h2>
            <p className='text-muted'>Science-Fiction & Fantasy author</p>
            <hr />
            <Stack gap={3}>
              <p>Hello, Reader. A pleasure to meet you. My name is Johann.</p>
              <p>
                Alongide this programming final, of course, I write fiction. One day, though likely
                not until the far future, I will be a best-selling author. In the meantime, you can
                view some of my ideas for stories by heading to the 'Books' tab, and optionally
                create, edit, or delete books.
              </p>
              <p>
                I am currently writing my first book, {' '}
                <b>Endless Odyssey: Online</b>. It is the tale of two worlds, one real and one
                digital, and how a group of individuals from both join forces to save them.
              </p>

              <h3>Thank you for coming!</h3>
              <small className='text-muted'>
                Disclaimer: all the art for the pre-generated 10 books were created using AI art.
                While it is an incredible tool, I've come to realize that I don't like how they
                treat artists, despite not being of the "visual" arts myself.
              </small>
            </Stack>
          </div>
          <div className='col-6'>
            <Image src={pfp} alt='author picture' className='mx-auto' />
          </div>
        </div>
      </div>
    </Row>
  );
}
