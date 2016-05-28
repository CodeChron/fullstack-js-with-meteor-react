import React from 'react'
import { List } from '../lists/list'

export const Homepage = (props) => <List collection={props.notes} {...props} />
