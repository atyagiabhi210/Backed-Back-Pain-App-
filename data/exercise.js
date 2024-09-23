class BackPainType {
  constructor(id, name, description, exercises, image, duration) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.exercises = exercises;
    this.image = image;
    this.duration = duration; // Duration in minutes
  }
}

class Exercise {
  constructor(id, name, description, duration, difficulty, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.duration = duration; // Duration in seconds
    this.difficulty = difficulty;
    this.image = image;
  }
}

// Lower Back Pain
export const lowerBackPain = new BackPainType(
  1,
  "Lower Back Pain",
  "Lower back pain caused by muscle strain, poor posture, or injury.",
  [
    new Exercise(
      1,
      "Pelvic Tilts",
      "Lie on your back and rock your pelvis back and forth to stretch your lower back.",
      60,
      "Beginner",
      require("../assets/images/pelvic_pose.jpg")
    ),
    new Exercise(
      2,
      "Child's Pose",
      "Stretch your lower back by sitting back on your heels and extending your arms forward.",
      30,
      "Beginner",
      require("../assets/images/child_pose.jpg")
    ),
    new Exercise(
      3,
      "Bridges",
      "Strengthen your glutes by lifting your hips toward the ceiling while lying on your back.",
      30,
      "Intermediate",
      require("../assets/images/hip_pose.jpg")
    ),
    new Exercise(
      4,
      "Knee-to-Chest Stretch",
      "Pull your knees to your chest while lying on your back to relieve tension.",
      30,
      "Beginner",
      require("../assets/images/kneeToOppo.jpg")
    ),
    new Exercise(
      5,
      "Cobra Stretch",
      "Lie face down and push your chest up to stretch your lower back.",
      30,
      "Beginner",
      require("../assets/images/cobra.jpg")
    ),
    new Exercise(
      6,
      "Figure Four Stretch",
      "Lie on your back and cross one ankle over the opposite knee, pulling the uncrossed leg towards you.",
      30,
      "Intermediate",
      require("../assets/images/figure-4.jpg")
    ),
    new Exercise(
      7,
      "Side Lying Leg Lifts",
      "Lie on your side and lift your top leg to strengthen your hip and lower back.",
      30,
      "Intermediate",
      require("../assets/images/leg_lifts.jpg")
    ),
    new Exercise(
      8,
      "Cat-Cow Stretch",
      "Alternate between arching your back and rounding it to mobilize the spine.",
      60,
      "Beginner",
      require("../assets/images/cat_cow.webp")
    ),
  ],
  require("../assets/images/lPain.jpg"),
  5
);

// Upper Back Pain
export const upperBackPain = new BackPainType(
  2,
  "Upper Back Pain",
  "Pain in the upper back due to poor posture or tension in the shoulder blades.",
  [
    new Exercise(
      9,
      "Thoracic Extension",
      "Stretch your upper back by extending your spine while seated.",
      30,
      "Beginner",
      require("../assets/images/thoracicExtension.webp")
    ),
    new Exercise(
      10,
      "Wall Angels",
      "Stand with your back against a wall and slide your arms up and down to improve shoulder mobility.",
      40,
      "Intermediate",
      require("../assets/images/wallAngle.jpg")
    ),
    new Exercise(
      11,
      "Scapular Squeeze",
      "Squeeze your shoulder blades together to strengthen the upper back.",
      60,
      "Beginner",
      require("../assets/images/scapularSqueeze.jpg")
    ),

    new Exercise(
      12,
      "Doorway Stretch",
      "Stand in a doorway and stretch your arms to open up your chest and shoulders.",
      30,
      "Beginner",
      require("../assets/images/door.jpg")
    ),
    new Exercise(
      13,
      "Neck Stretch",
      "Gently pull your head to one side to stretch the neck and upper back.",
      30,
      "Beginner",
      require("../assets/images/neck_stretch.jpg")
    ),
    new Exercise(
      14,
      "T-Spine Rotation",
      "Kneel on all fours and rotate your upper body to one side, reaching your arm towards the ceiling.",
      30,
      "Intermediate",
      require("../assets/images/t-spine.jpg")
    ),
    new Exercise(
      15,
      "Child's Pose&Side Stretch",
      "From Child's Pose, reach one arm to the side to stretch the side body.",
      30,
      "Beginner",
      require("../assets/images/child-side.jpg")
    ),
  ],
  require("../assets/images/upPain.png"),
  5
);

// Sciatica Pain
export const sciaticaPain = new BackPainType(
  3,
  "Sciatica Pain",
  "Pain radiating from the lower back down through the leg due to sciatic nerve compression.",
  [
    new Exercise(
      16,
      "Piriformis Stretch",
      "Stretch the piriformis muscle to relieve pressure on the sciatic nerve.",
      30,
      "Intermediate",
      require("../assets/images/piriformisStretch.jpg")
    ),
    new Exercise(
      17,
      "Knee-to-Opposite-Shoulder Stretch",
      "Loosen the glute muscles by pulling the knee across the body.",
      60,
      "Beginner",
      require("../assets/images/kneeToOppo.jpg")
    ),
    new Exercise(
      18,
      "Reclining Pigeon Pose",
      "Open up the hips to reduce pressure on the sciatic nerve.",
      30,
      "Intermediate",
      require("../assets/images/pigeonPose.jpg")
    ),
    new Exercise(
      19,
      "Hamstring Stretch",
      "Sit with one leg extended and reach towards your toes to stretch the hamstring.",
      30,
      "Beginner",
      require("../assets/images/hamstring.jpg")
    ),
    new Exercise(
      20,
      "Standing Calf Stretch",
      "Stand with one foot back and stretch the calf muscle.",
      30,
      "Beginner",
      require("../assets/images/calf.jpg")
    ),
    new Exercise(
      21,
      "Seated Forward Bend",
      "Sit with legs extended and reach forward to stretch the lower back.",
      30,
      "Beginner",
      require("../assets/images/seated_forward.jpg")
    ),
    new Exercise(
      22,
      "Butterfly Stretch",
      "Sit with the soles of your feet together and gently press your knees towards the ground.",
      30,
      "Beginner",
      require("../assets/images/butterfly.webp")
    ),
    new Exercise(
      23,
      "Lying Spinal Twist",
      "Lie on your back and twist your legs to one side to stretch the lower back.",
      30,
      "Beginner",
      require("../assets/images/lying_spinal.jpg")
    ),
  ],
  require("../assets/images/sciaticPain.jpg"),
  5
);

// Neck Pain
export const neckPain = new BackPainType(
  4,
  "Neck Pain",
  "Pain or stiffness in the neck area often caused by poor posture or prolonged sitting.",
  [
    new Exercise(
      24,
      "Neck Tilts",
      "Gently tilt your head to the side to stretch the muscles in your neck.",
      30,
      "Beginner",
      require("../assets/images/neck_tilts.jpg")
    ),
    new Exercise(
      25,
      "Chin Tucks",
      "Tuck your chin towards your chest to stretch the back of your neck.",
      30,
      "Beginner",
      require("../assets/images/chin_tuck.jpg")
    ),
    new Exercise(
      26,
      "Neck Rotations",
      "Slowly rotate your head from side to side to relieve neck tension.",
      30,
      "Beginner",
      require("../assets/images/neck_rotations.jpg")
    ),
    new Exercise(
      27,
      "Upper Trapezius Stretch",
      "Tilt your head to one side and pull slightly to stretch the trapezius muscle.",
      30,
      "Beginner",
      require("../assets/images/trapezius.jpg")
    ),
    new Exercise(
      28,
      "Levator Scapulae Stretch",
      "Tilt your head forward and to one side to stretch the levator scapulae muscle.",
      30,
      "Intermediate",
      require("../assets/images/scapulae.jpeg")
    ),
    new Exercise(
      29,
      "Scalene Stretch",
      "Gently pull your head to stretch the scalene muscles.",
      30,
      "Intermediate",
      require("../assets/images/scalene.jpg")
    ),
    new Exercise(
      30,
      "Wall Chin Tucks",
      "Stand against a wall and perform chin tucks to engage the neck muscles.",
      30,
      "Beginner",
      require("../assets/images/standing_chin.jpg")
    ),
    new Exercise(
      31,
      "Pectoral Stretch",
      "Stretch the chest to relieve tension in the neck.",
      30,
      "Beginner",
      require("../assets/images/pec_stretch.jpg")
    ),
  ],
  require("../assets/images/neck_pain.jpg"),
  5
);

// Middle Back Pain
export const middleBackPain = new BackPainType(
  5,
  "Middle Back Pain",
  "Pain in the mid-back region often related to muscle strain or poor posture.",
  [
    new Exercise(
      33,
      "Seated Spinal Twist",
      "While seated, twist your torso to the side to stretch your middle back.",
      30,
      "30 seconds per side",
      require("../assets/images/seated_spinal.jpg")
    ),
    new Exercise(
      34,
      "Cat-Cow Stretch",
      "Alternate between arching your back and rounding it to mobilize the spine.",
      60,
      "Beginner",
      require("../assets/images/cat_cow.webp")
    ),
    new Exercise(
      35,
      "Superman Pose",
      "Lie face down and lift your arms and legs simultaneously to strengthen the mid-back muscles.",
      30,
      "Intermediate",
      require("../assets/images/superman.jpg")
    ),
    new Exercise(
      36,
      "Child's Pose",
      "Stretch your lower back and relax your mid-back.",
      30,
      "Beginner",
      require("../assets/images/child_pose.jpg")
    ),
    new Exercise(
      37,
      "Thoracic Bridge",
      "Lie on your back with feet flat and lift your hips, engaging the mid-back.",
      30,
      "Intermediate",
      require("../assets/images/thoracic_bridge.jpg")
    ),
    new Exercise(
      38,
      "Seated Forward Bend",
      "Sit with legs extended and reach forward to stretch the spine.",
      30,
      "Beginner",
      require("../assets/images/seated_forward.jpg")
    ),
    new Exercise(
      39,
      "Standing Side Stretch",
      "Stand tall and reach one arm overhead while bending to the side.",
      30,
      "Beginner",
      require("../assets/images/standing_stretch.jpg")
    ),
  ],
  require("../assets/images/mbPain.jpg"),
  5
);

export const backPainTypes = [
  lowerBackPain,
  upperBackPain,
  sciaticaPain,
  neckPain,
  middleBackPain,
];
