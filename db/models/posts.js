'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      body: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      threadId: DataTypes.INTEGER,
      isQuestion: DataTypes.BOOLEAN,
      score: DataTypes.INTEGER
    },
    {}
  );
  Post.associate = function (models) {
    const columnMapping = {
      through: 'Score',
      otherKey: 'userId',
      foreignKey: 'postId'
    };
    Post.belongsTo(models.Thread, { foreignKey: 'threadId' });
    Post.belongsTo(models.User, { foreignKey: 'userId' });
    Post.belongsToMany(models.User, columnMapping);
  };
  return Post;
};
