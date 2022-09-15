import * as React from 'react';
import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    backgroundColor: '#000',
    borderRadius: 16,
  },
  TextView: {
    alignItems: 'center',
    marginTop: 80,
    backgroundColor: '#161a1f',
    marginBottom: 240,
    borderRadius: 16,
    minHeight: 600,
  },
  view: {
    marginTop: 12,
    backgroundColor: '#000',
    marginLeft: 12,
    marginRight: 10,
    width: 320,
    borderRadius: 8,
    position: 'relative',
    height: 36,
    justifyContent: 'center',
  },
  checforcus: {
    fontSize: 20,
    position: 'absolute',
    paddingLeft: 20,
    color: '#0ef08c',
  },
  Textuser: {
    fontSize: 20,
    top: 72,
    width: 320,
    position: 'absolute',
    paddingLeft: 20,
    color: '#0ef08c',
  },
  imageuser: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 80,
    minHeight: 320,
    justifyContent: 'center',
    position: 'relative',
  },
  buttonadd: {
    backgroundColor: '#000',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 16,
  },
});
