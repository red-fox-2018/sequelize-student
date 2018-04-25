return queryInterface.changeColumn('Students', 'height', {
        type: 'INTEGER USING CAST("height" as INTEGER)'
});
