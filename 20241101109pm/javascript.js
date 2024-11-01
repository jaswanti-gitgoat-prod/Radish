await this.connection.query(
      "SELECT * FROM Products WHERE ((name LIKE '" +
        query.search +
        "' OR description LIKE '" +
        query.search +
        "') AND deletedAt IS NULL) ORDER BY name",
    );
