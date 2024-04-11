#!/usr/bin/node
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    console.log('Before adding:', this.sanFranciscoNeighborhoods);
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    console.log('After adding:', this.sanFranciscoNeighborhoods);
    return this.sanFranciscoNeighborhoods;
  };
}