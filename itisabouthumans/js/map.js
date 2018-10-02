function getData(index) {
  var data = ["Original 13 Colonies","The 1783 Treaty of Paris with Great Britain defined the original borders of the United States. It generally stretched from the Eastern Seaboard to the Mississippi River in the west. There were ambiguities in the treaty regarding the exact border with Canada to the north that led to disputes that were resolved by the Webster–Ashburton Treaty in 1842. Beginning in the late 18th century, the new nation organized areas west of the Original thirteen states into several United States territories, setting a template for future expansion.", "The Louisiana Purchase in 1803, was negotiated with Napoleon during the presidency of Thomas Jefferson; the territory was acquired from France for $15 million (equivalent to $237 million in present-day terms). A small portion of this land was ceded to Britain in 1818 in exchange for the Red River Basin. More of this land was ceded to Spain in 1819 with the Florida Purchase, but was later reacquired through Texas annexation and Mexican Cession.", "The parts of Rupert's Land and the Red River Colony south of the 49th parallel in the basin of the Red River of the North were acquired in 1818 from Britain under the Anglo-American Convention of 1818.", "The Adams–Onís Treaty of 1819 with Spain resulted in Spain's cession of Florida and the Sabine Free State and Spain's surrender of any claims to the Oregon Country. Article III of the treaty, when properly surveyed, resulted in the acquisition of a small part of central Colorado.", "The region of Texas of the state of Coahuila y Texas declared its independence. The rest of the state was named Coahuila. The Treaties of Velasco ended the Texas Revolution on May 14, 1836 with the creation of the independent Republic of Texas.", "The independent Republic of Texas long sought to join the U.S., despite Mexican claims and the warning by Mexican leader Antonio López de Santa Anna that this would be equivalent to a declaration of war against the Mexican Republic. Congress approved the annexation of Texas on February 28, 1845. On December 29, 1845, Texas became the 28th state. Texas had claimed New Mexico east of the Rio Grande but had only made one unsuccessful attempt to occupy it; New Mexico was captured by the U.S. Army in August 1846 and then administered separately from Texas", "Oregon Country, the territory of North America west of the Rockies to the Pacific, was jointly controlled by the U.S. and Britain following the Anglo-American Convention of 1818 until June 15, 1846 when the Oregon Treaty divided the territory at the 49th parallel (see Oregon boundary dispute).","Mexican Cession lands were captured in the Mexican–American War in 1846–48, and ceded by Mexico in the Treaty of Guadalupe Hidalgo, where Mexico agreed to the present Mexico–United States border except for the later Gadsden Purchase. The United States paid $15 million (equivalent to $382 million in present-day terms) and agreed to pay claims made by American citizens against Mexico which amounted to more than $3 million (equivalent to $76 million today).", "In the Gadsden Purchase of 1853, the United States purchased a strip of land along the Mexico–United States border for $10 million (equivalent to $285 million in present-day terms), now in New Mexico and Arizona. This territory was intended for a southern transcontinental railroad."];
  return data[index];
}

function updateMap(value) {
  if (value>=1776 && value<1783) {
    actuallyUpdate(1776, 0);
  }
  else if (value>=1783 && value<1803) {
    actuallyUpdate(1783, 1);
  }
  else if (value>=1803 && value<1818) {
    actuallyUpdate(1803, 2);
  }
  else if (value>=1818 && value<1819) {
    actuallyUpdate(1818, 3);
  }
  else if (value>=1819 && value<1836) {
    actuallyUpdate(1819, 4);
  }
  else if (value>=1836 && value<1845) {
    actuallyUpdate(1836, 5);
  }
  else if (value>=1845 && value<1846) {
    actuallyUpdate(1845, 6);
  }
  else if (value>=1846 && value<1848) {
    actuallyUpdate(1846, 7);
  }
  else if (value>=1848 && value<1853){
    actuallyUpdate(1848, 8);
  }
  else {
    actuallyUpdate(1853, 9);
  }
}

function actuallyUpdate(value, dataIndex) {
  document.getElementById('map').src = "imgs/" + value + ".png";
  document.getElementById('year').innerHTML = value;
  document.getElementById('description').innerHTML = getData(dataIndex);
}
