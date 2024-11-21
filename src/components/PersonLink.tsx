import React from 'react';
import { Person as PersonType } from '../types/Person';

interface Props {
  person: PersonType;
}

export const PersonLink: React.FC<Props> = ({ person }) => (
  <a
    href={`#/people/${person.slug}`}
    className={person.sex === 'f' ? 'has-text-danger' : ''}
  >
    {person.name}
  </a>
);
