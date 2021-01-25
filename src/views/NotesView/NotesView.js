import React, { useContext } from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate/UserPageTemplate';
import Card from '../../components/molecules/Card/Card';
import { connect } from 'react-redux'

const NotesView = ({notes}) => {

  const allNotes = notes.map(note => <li> <Card key={note.id} {...note} /> </li>)

  return ( 
    <UserPageTemplate>
      <ul>
     {allNotes}
     </ul>
    </UserPageTemplate>
   );
}

const mapStateToProps = (state) => ({
  notes : state.notes
})


const NoteViewConsumer = connect(mapStateToProps)(NotesView)
 
export default NoteViewConsumer;